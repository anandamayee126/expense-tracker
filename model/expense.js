const database= require('../database/db');
module.exports= class Expense{
    constructor(id,amount,description,category){
        this.id=id;
        this.amount=amount;
        this.description=description;
        this.category=category;
    }
    save(){
        return database.execute('INSERT INTO new_table (id,amount,description,category) VALUES (?,?,?,?)',[this.id,this.amount,this.description,this.category]);
    }
    static fetchAll(){
        return database.execute('SELECT * FROM new_table');
    }
    static deleteById(id){
        return database.execute('DELETE FROM new_table WHERE id= (?)',[id]);
    }
}