function paystackPopUp(pkTest, email, amount, ref, plan, currency, onClosed, callback) {
  let handler = PaystackPop.setup({
    key: pkTest,
    email: email,
    amount: amount,
    ref: ref,
    plan: plan,
    currency: currency,
    onClose: function () {
      alert("Window closed.");
      onClosed();
    },
    callback: function (response) {
      callback();
      let message = "Payment complete! Reference: " + response.reference;
      alert(message);
    },
  });
  return handler.openIframe();
}
