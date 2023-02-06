# Overview
This code exports a handler function that handles incoming SMS messages sent to a Twilio number. The function uses the Twilio Messaging API to forward the incoming message to multiple numbers specified in the FORWARDING_NUMBERS context variable.

# Functionality
The handler function does the following:

Creates a new instance of a Twilio Messaging Response object.

Splits the FORWARDING_NUMBERS context variable into an array of numbers using the split method.

For each number in the array, uses the message method of the Twilio Messaging Response object to forward the incoming message (event.Body) with information about the sender (event.From). The to option specifies the recipient's number.

Returns the Twilio Messaging Response object to Twilio with a success callback.

# Usage
This code can be used as part of a Twilio function to forward incoming SMS messages to multiple numbers. The FORWARDING_NUMBERS context variable should be set with a comma-separated list of the numbers to which the message should be forwarded.
