const { Author } = require('../model/author');
const User = require('../model/user');

class authorController {
    static async create(req, res){
        const { name, email, birth } = req.body;

        if (!name || !email || !birth) {
            return res.status(400).send({ message: 'Os campos não podem estar vazios.' });
        }
        if (name.length < 3) {
            return res.status(400).send({ message: 'O nome não pode ser menor que três caracteres.' });
        }
        if (email.length < 3) {
            return res.status(400).send({ message: 'E-mail inválido.' });
        }
        if (!email.includes('@')) {
            return res.status(400).send({ message: 'E-mail inválido.' });
        }

        const author = {
            name, 
            email,
            birth,
            createdAt: Date.now(),
            updatedAt: Date.now(),
            removedAt: null
        }

        try {
            await Author.create(author)
            return res.status(201).send({ message: 'O Autor foi criado com êxito.' });
        } catch (error) {
            return res.status(500).send({ message: 'Falha ao pegar dados.' });
        }
    }

    static async getAuthor(_id) {
        try {
            const author = await Author.findById(_id);
            return author;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = authorController