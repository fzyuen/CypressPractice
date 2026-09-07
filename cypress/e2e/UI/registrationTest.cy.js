import {registrationPage} from '../../pages/registrationPage';

describe('registration test', () => {
  const regPage = new registrationPage();

  it('registration successful', () => {
    cy.visit('https://www.qapractice.com/practice-forms');
    regPage.enterCountryOfResidence('Canada');
    regPage.enterTitle('Mr.');
    regPage.enterFirstName('John');
    regPage.enterLastName('Doe');
    regPage.enterDateOfBirth('01/01/1990');
    regPage.enterDateOfJoining('01/01/2020');
    regPage.enterEmail('john.doe@example.com');
    regPage.enterPhone('123-456-7890');
    regPage.enterPreferedContactMethod_Email();
    regPage.clickSubmitButton();  
    //validate successful registration message is displayed
    regPage.validateSucessMessage();
  })

  it('Error message on Country of Residence', () => {
    cy.visit('https://www.qapractice.com/practice-forms');
    regPage.clickSubmitButton(); 
    //valudate error message is displayed for Country of Residence
    regPage.validateErrorMessageCountryOfResidence();
  })

  it('Error message on Email Format', () => {
    cy.visit('https://www.qapractice.com/practice-forms');
    regPage.enterDateOfJoining('20202-10-10');
    regPage.clickSubmitButton();
    //validate error message is displayed for Email Format
    regPage.validateErrorDateOfJoining();
  })
})