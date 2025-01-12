import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosPablic from "../../Hooks/useAxiosPpablic";
import usePayment from "../../Hooks/usePayment";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckOutForm = () => {
  window.scrollTo(0, 0);
  const [clientSecret, setClientSecret] = useState("");
  const [paymentData, , refetch] = usePayment();
  const [error, setError] = useState("");
  const [paymentId, setPaymentId] = useState("");
  const elements = useElements();
  const axiosPublic = useAxiosPablic();
  const stripe = useStripe();
  const navigate = useNavigate()
  console.log(paymentData)
  useEffect(() => {
    if (paymentData.price > 0) {
      axiosPublic
        .post("/create-payment-intent", { price: paymentData.price })
        .then((res) => {

          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosPublic, paymentData]);


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {

      setError("");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: paymentData.user.email || "anonymous",
            name: paymentData.user.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
      console.log(paymentMethod)
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {

        setPaymentId(paymentIntent.id);

        const payment = {
          email: paymentData.user.email,
          price: paymentData.price,
          class : paymentData.class,
          trainerName : paymentData.trainerName,
          soltName :paymentData.slotName,
          transactionId: paymentIntent.id,
          date: new Date(), // utc date convert. use moment js to
          bookingId: paymentData._id,
        };

        const res = await axiosPublic.post("/payments", payment);

        refetch();
        // console.log(res.data)
        if (res.data?.paymentResult.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Payment Successful",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        }
      }
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4 mt-5">
        <div className="form-group">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
            className="p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          disabled={!stripe}
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 mt-5 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
        >
          Confirm Booking
        </button>
        <p className="text-red-500 text-base inter">{error}</p>
        {paymentId ? (
          <p className="text-green-500 text-base inter">
            {" "}
            Your payment id is : {paymentId}
          </p>
        ) : (
          ""
        )}
      </form>
    </div>
  );
};

export default CheckOutForm;
