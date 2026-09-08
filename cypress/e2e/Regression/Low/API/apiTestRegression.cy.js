import { APIService } from '../../../../service/apiServiceClass'

describe('Regression API Test Suite', () => {
  const api = new APIService();

  it('R-GET Users API Test', () => {

    api.getUsers().then((response) => {
        expect(response.status).to.eq(200);
    })
  })

  it('R-POST Users API Test', () => {   

    const userData = {
      name: 'John Test',
      job: 'Software Engineer'
    };

    api.createUser(userData).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.name).to.eq('John Test');
      expect(response.body.job).to.eq('Software Engineer');
    });
  })

  it('R-PUT Users API Test', () => {

    const userData = {
      name: 'John Updated',
      job: 'Senior Software Engineer'
    };

    api.updateUser(2, userData).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq('John Updated');
      expect(response.body.job).to.eq('Senior Software Engineer');
    });
  })

  it('R-DELETE Users API Test', () => {
    api.deleteUser(2).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

})