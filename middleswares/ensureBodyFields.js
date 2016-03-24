/**
 * Created by Ludovic on 24/03/2016.
 */
module.exports =  function (server) {
    return function (fields) {
        fields = (fields instanceof Array)? fields : [fields];
        return function (req, res, next) {
            var missing = [];
            for(var i=0; i<fields.length; i++){
                if(!req.body[fields[i]]){
                    missing.push(fields[i]);
                }
            }

            if(missing.length > 0)
                return res.status(400).send('Bad request : ' + missing);
            
            next();
        }
    }
};