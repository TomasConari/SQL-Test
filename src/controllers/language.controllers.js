export const languageControllers = {
    getAll: async (req, res) => {
        try{  
            const query = await connection.query("SELECT id, name, workers FROM languages");
            if(query){
                res.status(200).json({
                    ok: true,
                    message: query
                });
            };
        }catch(error){
            console.error(error)
        };
    }
};