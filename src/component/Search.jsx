import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import dummy from "../db/db.json";

const Search = () => {
  const [search, setSearch] = useState(""); //검색어 상태
  const [result, setResult] = useState([]); //배열로 받아옴

  console.log(search);
  console.log(result);

  useEffect(() => {
    if (search === "") {
      setResult([]); // 검색어가 비었으면 결과를 초기화합니다.
      return;
    }
    const words = search.toLowerCase(); // 소문자로 변환
    const filteredResult = dummy.words.filter(
      (item) => item.eng.toLowerCase().includes(words) // eng 필드로 검색
    );

    setResult(filteredResult);
  }, [search]); //search 가 바뀔때마다 필터 실행

  function handleSearch(event) {
    setSearch(event.target.value); // 입력값을 search 상태로 설정
  }
  return (
    <div>
      <input
        type="text"
        placeholder="검색어를 입력하세요."
        value={search}
        onChange={handleSearch}
      />

      <ul>
        {result.length > 0 ? (
          result.map((item, id) => (
            <li key={id}>
              <strong>{item.eng}:</strong> {item.kor}
            </li>
          ))
        ) : (
          <p>검색 결과가 없습니다.</p>
        )}
      </ul>
    </div>
  );
};

export default Search;
