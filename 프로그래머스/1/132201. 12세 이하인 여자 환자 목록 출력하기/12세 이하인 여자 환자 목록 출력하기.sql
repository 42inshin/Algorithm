-- 코드를 입력하세요
SELECT PT_NAME, PT_NO, GEND_CD, AGE, IFNULL(tlno, 'NONE') AS TLNO
from patient
where age <= 12 and GEND_CD = 'W'
order by age DESC, pt_name ASC