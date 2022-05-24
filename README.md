## Practice of Dashboard 

### Navbar

```js
  useEffect(() => {
      const handleResize = () => setScreenSize(window.innerWidth);

      window.addEventListener('resize', handleResize);

      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    }, [])
    // 마운트: 창 너비의 사이즈가 바뀌면 값을 바꿈
    // 언마운트: 이벤트 리너 제거


    useEffect(() => {
      if(screenSize <= 900) {
        setActiveMenu(false);
      } else {
        setActiveMenu(true);
      }
    }, [screenSize])
    // 스크린 사이즈가 바뀔때 마다 체크 하여 900 이하일때 작동
```
