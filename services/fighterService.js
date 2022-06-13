const { FighterRepository } = require('../repositories/fighterRepository');

class FighterService {
    // TODO: Implement methods to work with fighters
    search(search) {
        const item = FighterRepository.getOne(search);
        if (!item) {
            return null;
        }
        return item;
    }

    get(id) {
        return FighterRepository.getOne({ id })
    }

    getAll() {
        return FighterRepository.getAll();
    }

    create(data) {
        let fighter = this.search({ name: data.name });
        if (fighter) {
            throw new Error("Fighter with this name already created.")
        }
        return FighterRepository.create(data);
    }

    update(id, data) {
        return FighterRepository.update(id, data)
    }

    delete(id) {
        return FighterRepository.delete(id)
    }
}

module.exports = new FighterService();