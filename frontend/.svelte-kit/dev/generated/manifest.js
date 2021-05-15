const c = [
	() => import("..\\..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\components\\error.svelte"),
	() => import("..\\..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\products.svelte"),
	() => import("..\\..\\..\\src\\routes\\imprint.svelte"),
	() => import("..\\..\\..\\src\\routes\\privacy.svelte"),
	() => import("..\\..\\..\\src\\routes\\cart.svelte"),
	() => import("..\\..\\..\\src\\routes\\faq.svelte"),
	() => import("..\\..\\..\\src\\routes\\nft.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/products.svelte
	[/^\/products\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/imprint.svelte
	[/^\/imprint\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/privacy.svelte
	[/^\/privacy\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/cart.svelte
	[/^\/cart\/?$/, [c[0], c[6]], [c[1]]],

	// src/routes/faq.svelte
	[/^\/faq\/?$/, [c[0], c[7]], [c[1]]],

	// src/routes/nft.svelte
	[/^\/nft\/?$/, [c[0], c[8]], [c[1]]]
];

export const fallback = [c[0](), c[1]()];