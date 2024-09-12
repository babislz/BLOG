const { Article } = require('../model/article');
const authorController = require('../controller/authorController');

class articleController {
    static createLog(error) {
        const timestamp = Date.now();
        const archivePath = path.resolve(__dirname, '..', `logs-${timestamp}.txt`);
        const errorString = JSON.stringify(error.message)
        fs.writeFile(archivePath, errorString, function (err, result) {
            if (err) console.log(err)
        })
    }

    static async create(req, res) {
        const { title, text, authorid } = req.body;

        if (!title || !text || !authorid) {
            return res.status(400).send({ message: "Os campos não podem estar vazios." });
        }
        if (title.length < 3) {
            return res.status(400).send({ message: "O título não pode ser menor que três caracteres." });
        }
        if (text.length < 15) {
            return res.status(400).send({ message: "O texto não pode ser menor que quinze caracteres." });
        }

        try {
            const author = await authorController.getAuthor(authorid);
            const article = {
                title, 
                text,
                likes: 0,
                author,
                createdAt: Date.now(),
                updatedAt: Date.now(),
                removedAt: null
            }
            await Article.create(article);
            return res.status(201).send({ message: "O artigo não pode ser menor que 15 caracteres." })
        } catch (error) {
            ArticleController.createLog(error);
            return res.status(500).send({ error: "Falha ao salvar o artigo", data: error.message });
        }
    }

    static async likeArticle(req, res) {
        const { id } = req.params;

        if (!id) {
            return res.status(400).send({ message: "Não foi possível localizar o ID." })
        }

        try {
            const article = await Article.findById(id);
            await Article.findByIdAndUpdate({_id: id}, {likes: ++article.likes});
            return res.status(200).send();
        } catch (error) {
            return res.status(500).send({ error: "Não foi possível curtir.", data: error.message })
        }
    }
}
module.exports = articleController