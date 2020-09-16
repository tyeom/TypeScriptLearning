/*
 * 사용 모듈 : typeorm 모듈 : npm install typeorm --save
                             npm install reflect-metadata --save
              mssql 모듈   : npm install mssql --save
 * TypeORM 프로젝트 생성 : typeorm init --name typeorm_sample --database TypeORMSample
 *
 */

import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import {Board} from "./entity/Board";
import { getRepository } from 'typeorm';

const createDB = async () => {
    try {
        const connection = await createConnection();
        // typeORM db connection
        console.log('typeORM DB 커넥션 생성됨');

        // 엔티티 모델 기준으로 테이블 생성 및 관계설정
        connection.synchronize();
        console.log('typeORM DB 동기화 완료');

        return 'done';
    }
    catch (err) {
        console.log(err);
    }
};

const write_User = async (user: User) => {
    const connection = await createConnection();

    let users = await getRepository(User).find();
    let duplicateID = users.some( p => p.id == user.id);
    if(duplicateID) {
        console.info('이미 등록된 아이디 입니다.');
        return 'ID already registered';
    }

    try {
        user.save();
        return 'ok';
    }
    catch(err) {
        console.error(err);
        return err;
    }
};

const write_Board = async (board: Board, user: User) => {
    const connection = await createConnection();

    let users = await getRepository(User).find( {id: user.id} );
    if(users == null || users.length <= 0) {
        console.info('등록되어 있지 않은 아이디 입니다.');
        return 'Unregistered user';
    }

    board.user = users[0];

    try {
        board.save();
        return 'ok';
    }
    catch(err) {
        console.error(err);
        return err;
    }
};

const getBoard = async (userID: string | null) => {
    const connection = await createConnection();

    // SQL : SELECT * FROM Board
    if(userID == null) {
        let boards = await Board.find();
        console.log(boards);
        return;
    }

    // SQL : SELECT * FROM User WHERE id = '{userID}'
    let user = await getRepository(User).findOne( {id: userID} );
    if(user == null) return;

    // SQL : SELECT * FROM Board WHERE user_id = {user.id}
    let boards = await Board.find( { user: user} );
    console.log(boards);
    return;
};

// DB 동기화
/*
createDB()
    .then((text: string = 'finished') => {
        console.log(text);
    })
    .catch((err) => {
        console.error(err);
    });
*/

// User 모델 생성
let user: User = new User();
user.id = 'test2';
user.password = 'aaaa'
user.name = '테스트';
user.level = 1;
user.etc = '기타';

// User INSERT
console.info('User INSERT');
write_User(user)
    .then((result: string) => {
        console.info('result', result);
    })
    .catch((err) => {
        console.error(err);
    });

// Board 모델 생성
let board: Board = new Board();
board.name = "testBoard";
board.title = '제목';
board.contents = '내용';
board.level = 0;
board.etc = '기타';
board.recordDate = new Date();

let board_user: User = new User();
board_user.id = 'test2';

// Board INSERT
console.info('Board INSERT');
write_Board(board, board_user)
    .then((result: string) => {
        console.info('result', result);
    })
    .catch((err) => {
        console.error(err);
    });

// Get Board
getBoard('test2');