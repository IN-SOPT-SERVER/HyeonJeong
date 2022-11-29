import { Router } from "express";
import { body } from "express-validator";
import { userController } from "../controller";
import { auth } from "../middlwares"

const router: Router = Router();

//! 순서 : router 작성해서 어떤거 필요한지 체크하기

//* 이름으로 유저 검색 - GEt api/user/search?keyword={}&option={
router.get("/search", userController.searchUserByName);


//* user auth(회원 조회) - GET api/user/auth/:userId
router.get("/auth/:userId", auth, userController.getUserById);

//* 유저 생성(회원가입) - POST api/user/auth
router.post(
    "/auth", [body("name").notEmpty(), body("email").notEmpty(), body("password").isLength({ min: 6 })],
    userController.createUser
);

//* 로그인 - POST api/user/signin
router.post(
    "/signin",
    [
        body("email").notEmpty(),
        body("email").isEmail(),
        body("password").notEmpty(),
        body("password").isLength({ min: 6 }),
    ],
    userController.signInUser
);


//* userId에 관한 User 조회
router.get("/:userId", userController.getUserById);

//* User 생성 - POST api/user
router.post('/', userController.createUser);

//* 전체 User 조회 - GET apu/user
router.get('/', userController.getAllUser);

//* User 정보 업데이트 - PATCH api/user/:userId
router.patch('/:userId', userController.updateUser);

//* User 삭제 - DELETE api/user/:userId
router.delete('/:userId', userController.deleteUser);



export default router;
