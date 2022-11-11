import { Request, Response } from "express";
import { userService } from "../service";

//! 2. 라우터에 따라 알맞은 controller 생성하기



//* 유저 생성
const createUser = async (req: Request, res: Response) => {
  const { userName, email, age } = req.body; // 여러 데이터 바로 받아오기

  if (!userName || !email || !age) {
    return res.status(400).json({ status: 400, message: "유저 생성 실패" });
  }

  const data = await userService.createUser(userName, email, age); //데이터 접근(비즈니스 로직)

  if (!data) { // 예외처리 해주기
    return res.status(400).json({ status: 400, message: "유저 생성 실패" });
  }

  return res.status(200).json({ status: 200, message: "유저 생성 성공", data });

};

//* 유저 전체 조회
const getAllUser = async (req: Request, res: Response) => {

  const data = await userService.getAllUser();

  return res.status(200).json({ status: 200, message: "유저 조회 성공", data });
};

//* 유저 정보 업데이트
const updateUser = async (req: Request, res: Response) => {
  const { name } = req.body;
  const { userId } = req.params;

  if (!name) {
    return res.status(400).json({ status: 400, message: "유저 생성 실패" });
  }

  const updatedUser = await userService.updateUser(+userId, name); //userId (string -> number)
  return res.status(200).json({ status: 200, message: "유저 업데이트 성공", updatedUser });
};

//* 유저 삭제
const deleteUser = async (req: Request, res: Response) => {
  const { userId } = req.params; // 어떤 user 삭제할지

  await userService.deleteUser(+userId);
  return res.status(200).json({ status: 200, message: "유저 삭제 성공" });
};

const getUserById = async (req: Request, res: Response) => {
  const { userId } = req.params;

  const data = await userService.getUserById(+userId); // string을 number로 바꾸는 법

  if (!data) {
    return res.status(404).json({ status: 404, message: "NOT_FOUND" });
  }
  return res.status(200).json({ status: 200, message: "유저 조회 성공", data });
};

const userController = { // export 할거 따로 변수로 만들고 export 해주기 
  createUser,
  getAllUser,
  updateUser,
  deleteUser,
  getUserById,
};



export default userController; // 통쨰로 export 하는법임
