import { Router } from 'express';
import orders from './orders_ctrl';

// export default ({ config, db }) => {
export default () => {
	let routes = Router();

	// add middleware here
	routes.use('/', orders)

	return routes;
}
