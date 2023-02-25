export const replaceUniversityName = (universityName: string) => {
  return universityName
    .replace('학교', '')
    .replace('여자대', '여대')
    .replace('공학대', '공대')
    .replace('과학기술대', '과기대')
    .replace('한양대(ERICA)', 'ERICA');
};
