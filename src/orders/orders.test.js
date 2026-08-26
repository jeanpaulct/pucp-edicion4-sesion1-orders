const request = require('supertest');
const app = require('../app'); 

describe('Orders Service API - /api/orders', () => {
    
    describe('GET /:id', () => {
        
        it('should retrieve an existing order by ID and return status 200', async () => {
            const targetOrderId = 'ORD-5001';

            const response = await request(app).get(`/api/orders/${targetOrderId}`);

            expect(response.status).toBe(200);
            expect(response.body.id).toBe(targetOrderId);
            expect(response.body.status).toBeDefined();
            expect(response.body.totalAmount).toBeGreaterThan(0);
        });

        it('should return status 404 for a non-existent order ID', async () => {
            const fakeOrderId = 'ORD-9999';

            const response = await request(app).get(`/api/orders/${fakeOrderId}`);

            expect(response.status).toBe(404);
            expect(response.body.status).toBe('error');
        });

    });
});