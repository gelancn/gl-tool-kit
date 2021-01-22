/** 单例 */
export class Singleton {
    private _map: Map<Function, unknown> = new Map();

    /**
     * 添加一个单例
     * @param cls
     * @param value
     */
    set<T>(cls: TypeCtor<T>, value: T): void {
        this._map.set(cls, value);
    }

    /**
     * 获取一个单例
     * @param cls
     */
    get<T>(cls: TypeCtor<T>): T {
        let instance = this._map.get(cls) as T;
        if (instance == null) {
            instance = new cls();
            this.set(cls, instance);
        }
        return instance;
    }

    /**
     * 移除一个单例
     * @param cls
     */
    delete<T>(cls: TypeCtor<T>): void {
        this._map.delete(cls);
    }
}

type TypeCtor<T> = new (...args: Array<never>) => T;
