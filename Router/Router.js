const express=require('express')
const Controler=require('../Controller/Contoller')

const router=express.Router();

router.post("/", Controler.createUser);
router.get('/', Controler.getUserList);
router.get('/:id', Controler.getUser);
router.put('/:id',Controler.UpdateUser);
router.delete('/:id',Controler.deleteUser);

module.exports=router;  