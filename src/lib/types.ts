export interface DeelioEntity {
	name: string,
	fields: { [field: string]: Field }
}

export interface Field {
	type: "string" | "number"
	primaryKey?: boolean,
}

export type DeelioConfig = {
	models: Array<DeelioEntity>
}

export type ExpressRouteHandler = (req: any, res: any, next?: any) => void

export type DeelioRouter = {
	[r: string]: {
		get: ExpressRouteHandler,
		post?: ExpressRouteHandler,
		put: ExpressRouteHandler,
		patch: ExpressRouteHandler,
		delete: ExpressRouteHandler
	}
}