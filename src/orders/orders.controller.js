const mockOrdersDb = [
    {
        id: 'ORD-5001',
        totalAmount: 150.00,
        status: 'PROCESSING',
        createdAt: '2026-08-26T10:00:00Z',
        customer: {
            userId: 'USR-9012',
            name: 'John Doe',
            email: 'john.doe@example.com',
            passwordHash: '$2a$12$eXAmPlEhAsH1234567890123456789012345678901234567890',
            oauth_token: 'ya29.a0AfH6SM..._secret_session_token_xyz',
            creditCardDigits: '4111-1111-1111-1111'
        }
    },
    {
        id: 'ORD-5002',
        totalAmount: 89.90,
        status: 'DELIVERED',
        createdAt: '2026-08-25T14:30:00Z',
        customer: {
            userId: 'USR-9013',
            name: 'Jane Smith',
            email: 'jane.smith@example.com',
            passwordHash: '$2a$12$aNoThErHaSh0987654321098765432109876543210987654321',
            oauth_token: 'ya29.a0AfH6SM..._secret_session_token_abc',
            creditCardDigits: '5500-0000-0000-0004'
        }
    }
];

/**
 * Retrieves order details by its ID.
 * 
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
const getOrderById = (req, res) => {
    const { id } = req.params;
    
    const order = mockOrdersDb.find(o => o.id === id);

    if (!order) {
        return res.status(404).json({
            status: 'error',
            message: 'Order not found'
        });
    }

    const orderDTO = {
        id: order.id,
        totalAmount: order.totalAmount,
        status: order.status,
        createdAt: order.createdAt,
        customer: {
            userId: order.customer.userId,
            name: order.customer.name,
            email: order.customer.email,
            // Enmascaramiento de datos sensibles si es estrictamente necesario enviarlos
            creditCardLast4: order.customer.creditCardDigits.slice(-4) 
        }
    };

    return res.status(200).json(orderDTO);
};

module.exports = {
    getOrderById
};