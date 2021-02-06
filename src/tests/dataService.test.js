const axios = require('axios');
import DataService from '../dataService';

describe('api request test', () => {
    const dataService = new DataService();
    const userId = {id: '67975727'};
    const resp = {data: userId};

    it('should return user id', async () => {
        jest.spyOn(axios, 'get').mockResolvedValueOnce(resp);
        const res = await dataService.getGitHubUser('zbys1av');
        expect(res.data.id).toContain('67975727');
    });
});