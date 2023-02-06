# forward-message-multiple
This code exports a Twilio function to handle incoming SMS messages by forwarding them to multiple numbers specified in the FORWARDING_NUMBERS context variable. The function uses the Twilio Messaging API to split the FORWARDING_NUMBERS into an array and send the incoming message to each number in the array.
