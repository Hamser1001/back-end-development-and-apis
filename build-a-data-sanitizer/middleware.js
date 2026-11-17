function inputCleaner(req, res, next) {
    const pattern = /<\/?[^>]+>/g
    if (req.body.username) {
        req.body.username = req.body.username.toLowerCase()
    }

    if (req.body.comment) {
        req.body.comment = req.body.comment.replace(pattern, "")
    }
    next()
}

function inputValidator(req, res, next) {
    const url = "/form?error=Username must be at least 3 characters.".replaceAll(" ", "%20")

    if (!req.body.username || req.body.username.length < 3) {
        res.redirect(url)
    } else {
        next()
    }
}

export { inputCleaner, inputValidator }