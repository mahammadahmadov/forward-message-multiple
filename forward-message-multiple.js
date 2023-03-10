exports.handler = function (context, event, callback) {
  const twiml = new Twilio.twiml.MessagingResponse();
  context.FORWARDING_NUMBERS.split(/,\s?/).forEach((number) => {
    twiml.message(`From: ${event.From}. Message: ${event.Body}`, {
      to: number,
    });
  });
  callback(null, twiml);
};
