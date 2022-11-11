import { Router } from "express";
import { userController } from "../controller";

const router: Router = Router();

router.get("/:userId", userController.getUserById);

//! 순서 : router 작성해서 어떤거 필요한지 체크하기

//* User 생성 - POST api/user
router.post('/', userController.createUser);

//* 전체 User 조회 - GET apu/user
router.get('/', userController.getAllUser);

//* User 정보 업데이트 - PATCH api/user/:userId
router.patch('/:userId', userController.updateUser);

//* User 삭제 - DELETE api/user/:userId
router.delete('/:userId', userController.deleteUser);

export default router;
