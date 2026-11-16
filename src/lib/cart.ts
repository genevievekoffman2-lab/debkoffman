// cart.ts
// THE place where "Add to cart" happens. Everything else in the site calls this.
//
// Right now there's no real cart: it only logs to the browser console.
// Later, connect Shopify or Stripe here (e.g. add a line item to a Shopify cart,
// or build a Stripe Checkout session) without touching the overlay code.

export function addToCart(productId: string, quantity: number): void {
	console.log('[cart] addToCart', { productId, quantity });
}
