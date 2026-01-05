const { Topic, Category } = require('../models');

exports.getHome = async (req, res) => {
    try {
        const topics = await Topic.findAll({
            limit: 6,
            order: [['createdAt', 'DESC']],
            include: [{ model: Category, as: 'Category' }] // Ensure association exists or remove if not
        });
        res.json(topics);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching home data' });
    }
};

exports.getPage = async (req, res) => {
    try {
        const { page } = req.params;
        const topic = await Topic.findOne({ where: { slug: page } });

        if (!topic) {
            return res.status(404).json({ message: 'Page not found' });
        }
        res.json(topic);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.getSubPage = async (req, res) => {
    try {
        const { category, page } = req.params;
        // Verify category exists? Access via slug directly is fine too if unique
        const topic = await Topic.findOne({
            where: { slug: page },
            include: [{
                model: Category,
                as: 'Category',
                where: { slug: category }
            }]
        });

        if (!topic) {
            return res.status(404).json({ message: 'Topic not found in this category' });
        }
        res.json(topic);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.getAllTopics = async (req, res) => {
    try {
        const topics = await Topic.findAll();
        res.json(topics);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
