const responseMiddleware = (req, res, next) => {
    // TODO: Implement middleware that returns result of the query
    if (res.err) {
        return res.status(400).json({ error: true, message: res.err.message })
    }

    return res.status(200).json(res.data)
}

exports.responseMiddleware = responseMiddleware;