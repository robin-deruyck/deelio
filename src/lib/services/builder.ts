import {DeelioEntity, DeelioRouter} from "../types";

export const buildRouter = (models: Array<DeelioEntity>) => {
	return models.reduce((prev, curr, index) => {
		const entity = curr.name.toLowerCase()
		const baseRoute = `/${entity}s`
		// FIXME : remove put in baseroute
		return {
			...prev,
			[baseRoute]: {
				get: (_, res) => {
					res.send("get all")
				},
				post: (_, res) => {
					res.send("post all")
				},
				put: (_, res) => {
					res.send("put all")
				},
				patch: (_, res) => {
					res.send("patch all")
				},
				delete: (_, res) => {
					res.send("delete all")
				},
			},
			[baseRoute + "/:id"]: {
				get: (req, res) => {
					res.send(`get ${req.params.id}`)
				},
				put: (req, res) => {
					res.send(`put ${req.params.id}`)
				},
				patch: (req, res) => {
					res.send(`patch ${req.params.id}`)
				},
				delete: (req, res) => {
					res.send(`delete ${req.params.id}`)
				},
			}
		}
	}, {} as DeelioRouter)
}

export const applyRouter = (router: DeelioRouter, app: any) => {
	Object.entries(router).forEach(([path, routeObject]) => {
		const {get, put, patch, delete: _delete, post} = routeObject
		if (get) app.get(path, get)
		if (put) app.put(path, put)
		if (patch) app.patch(path, patch)
		if (_delete) app.delete(path, _delete)
		if (post) app.post(path, post)
	})
}