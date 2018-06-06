export function ok(res){
  return (data) => {
    res.json(data);
  };
};

export const badRequest = (res) => {
  return (error) => {
    console.error('Bad request error:', error);
    res.status(400).json(error);
  }
}