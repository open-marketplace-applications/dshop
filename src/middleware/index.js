import { Router } from 'express';
import express from 'express';

export default ({ config, db }) => {
	let routes = Router();

	// add middleware here
	routes.use('/', express.static(__dirname + 'frontend/dist'));

	return routes;
}
