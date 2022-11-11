import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//! 3. controller 작성 후 필요한 service 생성하기

//* 유저 생성
const createUser = async (userName: string, email: string, age: number) => {
  // user테이블에 create
  const data = await prisma.user.create({
    data: {
      userName,
      email,
      age
    },

  });
  return data;
};


//* 유저 전체 조회
const getAllUser = async () => {
  const data = await prisma.user.findMany;
  return data;
};

//* 유저 정보 업데이트
const updateUser = async (userId: number, name: string) => {
  const data = await prisma.user.update({
    // 어떤 데이터 업데이트할지
    where: {
      id: userId
    },
    data: {
      userName: name
    }
  })
  return data;
};

//* 유저 삭제 
const deleteUser = async (userId: number) => {
  await prisma.user.delete({
    where: {
      id: userId,
    }
  })
};

//* userId로 유저 조회
const getUserById = async (userId: number) => {
  const user = await prisma.user.findUnique({
    where: { // where은 필터를 걸어서 데이터 조회하는 것
      id: userId,
    },
  });

  return user;
};

const userService = {
  getUserById,
  createUser,
  getAllUser,
  updateUser,
  deleteUser,
};

export default userService;
