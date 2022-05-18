import { List, ListItem, Paper } from '@mui/material';
import { VFC } from 'react';

// メニューが増えたら動的にスタイルを変更する
export const SettingSideMenu: VFC = () => {
  return (
    <Paper>
      <List sx={{ width: 200 }}>
        <ListItem button sx={{ fontWeight: 'bold' }}>
          アカウント
        </ListItem>
      </List>
    </Paper>
  );
};
