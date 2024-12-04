import styled from "styled-components";
import Navbar from "../../ProductList/components/Navbar";
import { useNavigate } from "react-router-dom";
import { authInstance } from "../../../api/axiosInstance";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";

// 공지 다 가져오는 api 함수
async function getNotices(page) {
  let url = "/admin/notice";
  if (page) {
    url += `?page=${page}`;
  }
  try {
    const result = await authInstance.get(url);
    console.log(result);
    return result.data.result;
  } catch (error) {
    console.error(error);
  }
}

// Styled components
const Container = styled.div`
  width: 80%;
  height: 70%;
  margin: 0 auto;
  padding: 20px;
`;

const NoticeTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SearchBar = styled.input`
  width: 85%;
  height: 40px;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 14px;
`;

const SearchIcon = styled(CiSearch)`
  position: relative;
  top: 5px;
  left: -40px;
  width: 30px;
  height: 30px;
`;

const Dropdown = styled.select`
  width: 13%;
  float: right;
  height: 40px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 14px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeaderRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  &:hover {
    background-color: #ddd;
    cursor: pointer;
  }
`;

const TableHeader = styled.th`
  background-color: #f4f4f4;
  text-align: left;
  padding: 8px;
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const Pagination = styled.div`
  margin: 20px 0;
  text-align: center;
`;

const PageButton = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  background-color: ${(props) => (props.isNow ? "" : "#fff")};
  cursor: pointer;

  &:disabled {
    color: #aaa;
    cursor: not-allowed;
  }
`;

const Board = () => {
  const navigate = useNavigate();
  const [notices, setNotices] = useState([]);
  const [nowPage, setNowPage] = useState(0);
  console.log(notices, nowPage);

  const handleClickItem = (noticeId) => {
    console.log(noticeId);
    navigate("/notice/" + noticeId);
  };

  useEffect(() => {
    // getNotices 함수를 통해서 받아온 정보를 "상태로 저장하기 위한" async 함수
    async function fetchGetNotices(nowPage) {
      const result = await getNotices(nowPage);
      setNotices(result);
    }
    fetchGetNotices(nowPage);
  }, [nowPage]);

  return (
    <Container>
      <NoticeTop>
        <SearchBar placeholder="검색어를 입력하세요" />
        <SearchIcon></SearchIcon>
        <Dropdown>
          <option>최신순</option>
          <option>오래된순</option>
        </Dropdown>
      </NoticeTop>

      <Table>
        <thead>
          <TableHeaderRow>
            <TableHeader>제목</TableHeader>
            <TableHeader>작성일</TableHeader>
            <TableHeader>조회수</TableHeader>
          </TableHeaderRow>
        </thead>
        <tbody>
          {notices.content &&
            notices.content.map((item) => {
              return (
                <TableRow
                  key={item.id}
                  onClick={() => handleClickItem(item.id)}
                >
                  <TableCell>{item.title}</TableCell>
                  <TableCell>{item.createdAt.split("T")[0]}</TableCell>
                  <TableCell>{item.viewCount}</TableCell>
                </TableRow>
              );
            })}
        </tbody>
      </Table>
      <Pagination>
        <PageButton
          disabled={nowPage == 0 ? true : false}
          onClick={() => setNowPage((prev) => prev - 1)}
        >
          ← Previous
        </PageButton>
        {notices.content &&
          Array.from({ length: notices.totalPages }).map((_, i) => (
            <PageButton key={i} onClick={() => setNowPage(i)}>
              {" "}
              {i + 1}{" "}
            </PageButton>
          ))}
        <PageButton
          disabled={nowPage == notices.totalPages - 1}
          onClick={() => setNowPage((prev) => prev + 1)}
        >
          Next →
        </PageButton>
      </Pagination>
    </Container>
  );
};

export default Board;
