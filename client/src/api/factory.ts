import _history from './history'

export default class ApiFactory {
    static history: 'history'
    static create(type: string) {
        switch (type) {
            case this.history:
                return _history
        }
    }
}
