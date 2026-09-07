export class registrationPage {
    //https://www.qapractice.com/practice-forms

    constructor() {
        this.countryOfResidence='[data-testid="forms-country"]';
        this.title='[data-testid="forms-title"]';
        this.firstName = '[data-testid="forms-first-name"]';
        this.lastName = '[data-testid="forms-last-name"]';
        this.dateOfBirth = '[data-testid="forms-dob"]';
        this.dateOfJoining = '[data-testid="forms-doj"]';
        this.email = '[data-testid="forms-email"]';
        this.phone = '[data-testid="forms-phone-number"]';
        this.preferedContactMethod_Email = '[data-testid="forms-comm-email"]';
        this.preferedContactMethod_Phone = '[data-testid="forms-comm-phone"]';
        this.clearButton = '[button[type="button"]';
        this.submitButton = 'button[type="submit"]';

        //validation messages
        this.successMessage = '[data-testid="forms-success"]';
        this.errorCountryOfResidence = '[class="text-danger form-text"]';
        this.errorDateOfJoining = '[class="text-danger form-text"]';
    }

    enterCountryOfResidence(country) {
        cy.get(this.countryOfResidence).select(country);
    }
    
    enterTitle(title) {
        cy.get(this.title).select(title);
    }

    enterFirstName(firstName) {
        cy.get(this.firstName).type(firstName);
    }   

    enterLastName(lastName) {
        cy.get(this.lastName).type(lastName);
    }   
    
    enterDateOfBirth(dob) {
    cy.get(this.dateOfBirth).click();   
    cy.get('.react-datepicker__day').first().click();
    }

    enterDateOfJoining(doj) {
    cy.get(this.dateOfJoining).type(doj);
    }   

    enterEmail(email) {
        cy.get(this.email).type(email);
    }

    enterPhone(phone) {
        cy.get(this.phone).type(phone);
    }

    enterPreferedContactMethod_Email() {
        cy.get(this.preferedContactMethod_Email).check();
    }  

    clickSubmitButton() {
        cy.get(this.submitButton).click();
    }

    validateSucessMessage() {
        cy.get(this.successMessage).should('be.visible');
    }

    validateErrorMessageCountryOfResidence() {
        cy.get(this.errorCountryOfResidence).should('be.visible');
    }

    validateErrorDateOfJoining() {
        cy.get(this.errorDateOfJoining).should('contain', 'Date of Joining format should be dd/mm/yyyy');
    }
}   