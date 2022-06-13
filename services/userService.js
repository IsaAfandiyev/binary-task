const { UserRepository } = require('../repositories/userRepository');

class UserService {

    // TODO: Implement methods to work with user

    search(search) {
        const item = UserRepository.getOne(search);
        if (!item) {
            return null;
        }
        return item;
    }

    get(id) {
        return UserRepository.getOne({ id })
    }

    getAll() {
        return UserRepository.getAll();
    }

    create(data) {
        let userWithEmail = this.search({ email: data.email });
        let userWithPhone = this.search({ phoneNumber: data.phoneNumber });
        if (userWithEmail || userWithPhone) {
            throw new Error("User with this email or phone already exist")
        }

        return UserRepository.create(data);
    }

    update(id, data) {
        return UserRepository.update(id, data)
    }

    delete(id) {
        return UserRepository.delete(id)
    }
}

module.exports = new UserService();