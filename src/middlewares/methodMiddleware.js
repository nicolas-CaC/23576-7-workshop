const middleware = (req, res, next) => {

    if (req.query?.metodo === 'PATCH' && req.method === 'GET') {
        req.method = 'PATCH'
        req.url = req.url.split('?')[0] + '/' + req.query.id
    }

    if (req.query?.metodo === 'PUT' && req.method === 'POST') {
        req.method = 'PUT'
        req.url = req.url.split('?')[0] + '/' + req.body.id
    }

    if (req.query?.metodo === 'DELETE' && req.method === 'GET') {
        req.method = 'DELETE'
        req.url = req.url.split('?')[0] + `/${req.query.id}`
    }

    next()
}

export default middleware