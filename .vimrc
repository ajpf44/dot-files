set relativenumber
set nu rnu
syntax on
" Set shift width to 4 spaces.
set shiftwidth=4

" Set tab width to 4 columns.
set tabstop=4

" Use space characters instead of tabs.
set expandtab
set smarttab
set autoindent

filetype plugin on
set omnifunc=syntaxcomplete#Complete

"inoremap " ""<left>
"inoremap ' ''<left>
"inoremap ( ()<left>
"inoremap [ []<left>
"inoremap { {}<left>
"inoremap {<CR> {<CR>}<ESC>O
"inoremap {;<CR> {<CR>};<ESC>O


call plug#begin()

Plug 'mattn/emmet-vim'
Plug 'alvan/vim-closetag'
Plug 'pangloss/vim-javascript'
Plug 'fatih/vim-go', { 'do': ':GoUpdateBinaries' }
Plug 'lambdalisue/fern.vim'
Plug 'jiangmiao/auto-pairs'
Plug 'leafgarland/typescript-vim'

call plug#end()

let g:user_emmet_leader_key=','
