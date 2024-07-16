import React from 'react';
import Button_0 from './Options/Button_0';
import Admission from './Options/Admission';
import Fee from './Options/Fee';
import Uniform from './Options/Uniform';
import Books from './Options/Books';
import Document from './Options/Documents/Document';
import StudyCert from './Options/Documents/StudyCert';
import Other from './Options/Other';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

  const admission = () => {
    const message = createChatBotMessage('Choose your Grade: ',{
      widget: "admission"
    });
    updateState(message)
  }
  
  const fee = () => {
    const message = createChatBotMessage('Choose the following domain: ',{
      widget: "fee"
    });
    updateState(message)
  }

  const uniform = () => {
    const message = createChatBotMessage('Choose your Preference: ',{
      widget: "uniform"
    });
    updateState(message)
  }

  const books = () => {
    const message = createChatBotMessage('Choose Grade:  ',{
      widget: "books"
    });
    updateState(message)
  }

  const document = () => {
    const message = createChatBotMessage('Choose required document: ',{
      widget: "document"
    });
    updateState(message)
  }

  const other = () => {
    const message = createChatBotMessage('Other...',{
      widget: "other"
    });
    updateState(message)
  }

  const pupilpodandid = () => {
    const message = createChatBotMessage('For all Pupilpod and ID Card(or loss) related queries Contact School Office 080-22214416 or email to munrajuk@sjbhs.edu.in.');
    updateState(message)
  }

  const schoolfee = () => {
    const message = createChatBotMessage('Login to Pupilpod> Click on school fees in the Home Page> Click on View or Pay Now. Or it can be paid in the School office via DD ONLY');
    updateState(message)
  }

  const busfee = () => {
    const message = createChatBotMessage('Link to be Uploaded...');
    updateState(message)
  }

  const clubfee = () => {
    const message = createChatBotMessage('Login to Pupilpod> Click on Club fees in the Home Page> click on View or Pay Now.');
    updateState(message)
  }

  const ptafee = () => {
    const message = createChatBotMessage('Login to Pupilpod> Click on PTA fees in the Home Page> click on View or Pay Now.');
    updateState(message)
  }

  const frenchfee = () => {
    const message = createChatBotMessage('Link to be Uploaded...');
    updateState(message)
  }

  const stitched = () => {
    const message = createChatBotMessage('Contact Vital Rao & Sons - 98459 86327.');
    updateState(message)
  }

  const readymade = () => {
    const message = createChatBotMessage('Contact Scholar Clothing Co - 7899853058.');
    updateState(message)
  }

  const housecolour = () => {
    const message = createChatBotMessage('Contact Specimen 8 Inc - 9108461334.');
    updateState(message)
  }

  const shoes = () => {
    const message = createChatBotMessage('Contact Sunrise Enterprises - 9353081600/ 080-23507129.');
    updateState(message)
  }

  const kindergartenbooks = () => {
    const message = createChatBotMessage('Contact Vidyarthikendra - 7307059385/ 7753888113.');
    updateState(message)
  }

  const onetotenbooks = () => {
    const message = createChatBotMessage('Contact Studentzone - 9986740540.');
    updateState(message)
  }

  const iscbooks = () => {
    const message = createChatBotMessage('Contact Gangarams Book Bureau - 99450 84629.');
    updateState(message)
  }
  
  const tc = () => {
    const message = createChatBotMessage("Draft a letter to the Principal stating the reason for you leaving the school with parent's signature. ");
    updateState(message)
  }

  const passcert = () => {
    const message = createChatBotMessage('Kindly obtain a FIR copy from Police Station and thereafter enclose a copy of the FIR and a copy of the Lost Pass Certificate along with a charge of ₹ 775/- as levied by the Council.');
    updateState(message)
  }

  const studycert = () => {
    const message = createChatBotMessage('Choose reason:  ',{
      widget: "studycert"
    });
    updateState(message)
  }

  const aadharsc = () => {
    const message = createChatBotMessage('Kindly draft a letter along with a passport size Photo and submit it at the office.');
    updateState(message)
  }

  const castesc = () => {
    const message = createChatBotMessage("Kindly draft a letter along with your parent's/student's caste certificate issued by the Government.");
    updateState(message)
  }

  const entrancesc = () => {
    const message = createChatBotMessage('Kindly get your Transfer certificate or Draft a letter with full details related to Joining year and Graduating year.');
    updateState(message)
  }

  const loss = () => {
    const message = createChatBotMessage('Regarding loss of ID card, Please contact the office at 080-22214416.');
    updateState(message)
  }

  const about = () => {
    const message = createChatBotMessage('Hi, I see you want to know more about me! I am a ChatBot made a student of the school! I can perform basic tasks, I am still not fully optimised but will be better real soon!');
    updateState(message)
  }

  const updateState = (message) => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message]
    }))
  }

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            admission,
            uniform,
            fee,
            books,
            document,
            other,
            pupilpodandid,
            busfee,
            schoolfee,
            clubfee,
            ptafee,
            frenchfee,
            shoes,
            housecolour,
            stitched,
            readymade,
            kindergartenbooks,
            onetotenbooks,
            iscbooks,
            studycert,
            tc,
            loss,
            about,
            castesc,
            passcert,
            aadharsc,
            entrancesc,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
