# AWS LEX

### Each bot has
* Intent
* Slot type

## Intent
* An intent is a goal that the user wants to accomplish through a conversation with a bot.
### AMAZON.FallbackIntent
* It is a built-in for each language intent that is used when the bot does not understand the user's input or when the user’s request does not match any of the defined intents.

* It's a way for the bot to handle unexpected or unclear u  tterances by providing a fallback response.   

### Each intent has
  1. Sample utterances.
  2. Slot.
  3. Initial response.
  4. Closing response.
  5. Confirmation.
  6. Fulfillment.

### ***SAMPLE UTTERANCES***
* user phrases that are designed to ***trigger specific intents***.

### Slot
* Slots are like parameters or pieces of information that the bot needs in order to fulfill the intent.

* Slots are associated with a particular intent to gather the necessary data.
* Each slot has a slot type.
* Slot ***prompt*** is a message or question that the bot asks the user to gather the required information for a specific slot.

## Slot Types
* the type of data a slot is expected to hold (e.g., a date, city name, or a number).

* Defines the data type for the slot (e.g., AMAZON.Date, AMAZON.City, or a custom slot type).
    #### Custom Slot Types:
    * These are slot types you define based on your application needs. For example, if you are building a booking system and need a slot for a RoomType (e.g., Single, Double, Suite), you could create a custom slot type.

### Initial response
* It is the first message or question the bot sends to the user when they trigger an intent.

* This response is the starting point of the conversation and helps guide the user toward providing the information the bot needs to fulfill their request.

### Closing response
* It is the final message or response the bot gives to the user after the intent has been successfully fulfilled.
* It typically signals the end of the conversation or confirms the completion of the user's request.

### Confirmation (y/n)
#### 1. Confirmation prompt. 
* Question to ask for confirmation.
* It is used to ask the user if they want to confirm an action before it is completed.
#### 2. Decline response.
* Promt if not confirmed (no).
* This response is triggered after the confirmation prompt if the user chooses to decline the action.

### Fulfillment
* In AWS Lex, fulfillment is the step where your bot does something with the information the user has provided. For example, after asking the user questions, the bot might need to check a database, call an API, or perform an action based on the answers. That’s what fulfillment does—it completes the task the user asked for.

* It typically involves invoking an action or integrating with backend systems to fulfill the user's intent, such as making an API call, querying a database, or invoking an AWS Lambda function.
* Use fulfillment message to tell users the status of their intent. You can define messages when fulfillment is sucessfull, and for when the intent can't be fulfilled.
#### Intent Fulfillment Types
1. Return Dialog.
2. Invoke Lambda Function.
3. Close.

## Advanced lex concepts
  1. Conditional-Branching.
  2. Card-Group response.
  3. Multiple intent.
  4. Set state/values.
  5. Invoke lambda.
  6. Code-hook.
  7. Lex debugging via cloud watch.

### Conditional-Branching (Branching Condition)
* It refers to the process of making decisions within a conversation based on the user's input or the current state of the conversation. It allows the bot to take different paths depending on specific conditions (e.g., if the user responds positively or negatively, or if certain criteria are met).
* You can use Conditional-Branching control the path that your customer takes through the conversation with your bot.

* In AWS Lex, conditional branching is typically implemented using ***slot values***, ***intent values***, or ***session attributes*** to guide the conversation flow.

### Card-View response
It is a way of displaying detailed information about a single item to the user in a visually appealing way. Instead of just sending plain text, the information is structured in a card that can include things like a title, a description, an image, and buttons.

### Card-Group response

## Intent state

1. Failed
   * Meaning: The bot could not fulfill the intent due to an error or user action (e.g., incomplete slot values, unexpected inputs, or an error in fulfillment logic).
   * Example: A user starts booking a flight but provides invalid details or exits the conversation before completing the required steps.
2. Fulfilled
   * Meaning: The intent has been successfully fulfilled by the bot, often through a fulfillment Lambda function or other backend system.
   * Example: The bot confirms: "Your flight to New York on Monday has been successfully booked."
3. InProgress
   * Meaning: The bot is actively eliciting slot values from the user to complete the intent. It asks follow-up questions until all required slots are filled or an exit condition is triggered.
   * Example: The bot asks:
     * "Where would you like to fly?"
     * "When do you want to leave?"

4. ReadyForFulfillment
   * Meaning: The bot has successfully gathered all required slot values for the intent and is ready to trigger the fulfillment action.
   * Example: After collecting the destination, date, and time for a flight booking, the bot prepares to call a Lambda function or an external API to finalize the booking.
5. Waiting
   * Meaning: The bot is waiting for the user's input, especially during streaming conversations. This state occurs when the bot has paused to let the user respond.
   * Example: In a real-time chat or voice interaction, the bot waits for the user to say "New York" when asked for a destination.

# Session state
# Dialog action

# Conversational AI & chatbot