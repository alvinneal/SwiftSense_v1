import React from 'react';
import intents from './dataset_swiftsense.json'; // Adjust the path to your JSON file

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    const intent = getIntentFromMessage(message);
    if (intent) {
      handleIntent(intent);
    } else {
      actions.sendResponse("Sorry, I didn't understand that.");
      actions.button_0()
    }
  };

  const getIntentFromMessage = (message) => {
    // Convert the message to lowercase and trim for case-insensitive comparison
    const lowercasedMessage = message.toLowerCase().trim();

    // First, check if the message matches an intent tag exactly
    const matchingIntentByTag = intents.intents.find(
      (intent) => intent.tag.toLowerCase() === lowercasedMessage
    );

    if (matchingIntentByTag) {
      return matchingIntentByTag; // Return the matched intent if found by tag
    }

    // Find specific matches first
    let specificIntent = null;
    let genericIntent = null;

    for (const intent of intents.intents) {
      for (const pattern of intent.patterns) {
        // Check if the message contains the pattern
        if (lowercasedMessage.includes(pattern.toLowerCase())) {
          if (intent.tag === 'greeting') {
            // Store generic intent (e.g., greeting) as a fallback
            genericIntent = intent;
          } else {
            // Prefer specific intents
            specificIntent = intent;
          }
        }
      }
    }

    // Return specific intent if found, otherwise return generic intent
    return specificIntent || genericIntent || null;
  };

  const handleIntent = (intent) => {
    switch (intent.tag) {
      case 'greeting':
        actions.sendResponse(intent.responses[Math.floor(Math.random() * intent.responses.length)]);
        actions.button_0();
        break;
      case 'goodbye':
        actions.sendResponse(intent.responses[Math.floor(Math.random() * intent.responses.length)]);
        break;
      case 'thanks':
        actions.sendResponse(intent.responses[Math.floor(Math.random() * intent.responses.length)]);
        break;
      case 'entrance':
        actions.sendResponse(intent.responses[Math.floor(Math.random() * intent.responses.length)]);
        break;
      case 'tc':
        actions.sendResponse(intent.responses[Math.floor(Math.random() * intent.responses.length)]);
        break;
      case 'passcert':
        actions.sendResponse(intent.responses[Math.floor(Math.random() * intent.responses.length)]);
        break;
      case 'aadhar':
        actions.sendResponse(intent.responses[Math.floor(Math.random() * intent.responses.length)]);
        break;
      case 'caste':
        actions.sendResponse(intent.responses[Math.floor(Math.random() * intent.responses.length)]);
        break;
      case 'shoes':
        actions.sendResponse(intent.responses[Math.floor(Math.random() * intent.responses.length)]);
        break;
      case 'stitched':
        actions.sendResponse(intent.responses[Math.floor(Math.random() * intent.responses.length)]);
        break;
      case 'housecolour':
        actions.sendResponse(intent.responses[Math.floor(Math.random() * intent.responses.length)]);
        break;
      case 'readymade':
        actions.sendResponse(intent.responses[Math.floor(Math.random() * intent.responses.length)]);
        break;
      case 'kindergartenbooks':
        actions.sendResponse(intent.responses[Math.floor(Math.random() * intent.responses.length)]);
        break;
      case 'onetotenbooks':
        actions.sendResponse(intent.responses[Math.floor(Math.random() * intent.responses.length)]);
        break;
      case 'iscbooks':
        actions.sendResponse(intent.responses[Math.floor(Math.random() * intent.responses.length)]);
        break;
      case 'busfee':
        actions.sendResponse(intent.responses[Math.floor(Math.random() * intent.responses.length)]);
        break;
      case 'frenchfee':
        actions.sendResponse(intent.responses[Math.floor(Math.random() * intent.responses.length)]);
        break;
      case 'clubfee':
        actions.sendResponse(intent.responses[Math.floor(Math.random() * intent.responses.length)]);
        break;
      case 'ptafee':
        actions.sendResponse(intent.responses[Math.floor(Math.random() * intent.responses.length)]);
        break;
      case 'schooltiming':
        actions.schooltiming()
        break;
      case 'officetiming':
        actions.sendResponse(intent.responses[Math.floor(Math.random() * intent.responses.length)]);
        break;
      case 'pupilpodandid':
        actions.sendResponse(intent.responses[Math.floor(Math.random() * intent.responses.length)]);
        break;
      // Add more cases here for other intents that should trigger specific widgets
      default:
        // Check if there is a corresponding action for the intent tag
        if (actions[intent.tag]) {
          actions[intent.tag](); // Dynamically call the action based on the intent tag
        } else {
          // Default behavior for intents that do not require special handling
          actions.sendResponse("Sorry, I didn't understand that.");
          actions.button_0()
        }
        break;
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse,
          actions
        });
      })}
    </div>
  );
};

export default MessageParser;
