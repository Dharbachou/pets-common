/**
 * Enum is used to provide status of the order for different cases
 * @readonly
 * @enum {string}
 * @property {string} created - When the order has been created, but the ticket
 * is is trying to order has not been reserved
 * @property {string} cancelled - the ticket the order is trying to reserve has already
 * been reserved, or when the user has cancelled the order. The order expires before payment
 * @property {string} awaiting:payment - the order has successfully reserved the ticket
 * @property {string} complete - the order has reserved the ticket and the user
 * has provided payment successfully
 */
export enum OrderStatus {
    Created = 'created',
    Cancelled = 'cancelled',
    AwaitingPayment = 'awaiting:payment',
    Complete = 'complete'
}