# Lambda

* ***Event driven*** >> can be triggerd for other aws services event. It cannot run by itself manually.
* ***Compute*** >> means it provides the environment where your code can run, but you don’t have to manage the infrastructure that runs it.

* ***Serverless*** >> no need to manage scale up or scale down.
* ***Cost optimization***.
* ***Security/compliance***.

## Session attribures

## Dialog action
* Next action amazon lex should do.

## Code hooks

## "invocationSource": "DialogCodeHook | FulfillmentCodeHook"
### invocationSource (key)
* It specifies the stage of the conversation at which the Lambda function is being invoked.
* DialogCodeHook
  * Meaning: The Lambda function is triggered during the dialog phase.
* FulfillmentCodeHook
  * Meaning: The Lambda function is triggered during the fulfillment phase.

# [Intergrate lex with twilio](https://www.youtube.com/watch?v=KLUONyhcjNI&list=PLAMHV77MSKJ7s4jE7F_k_Od8qZlFGf1BY&index=3)
