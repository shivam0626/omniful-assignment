import React from 'react'
import "./Styles/Sidebar.css";
import { GrHomeRounded } from "react-icons/gr";
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import TimelineIcon from '@mui/icons-material/Timeline';
import { TbTriangleSquareCircle } from "react-icons/tb";
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import AllInboxOutlinedIcon from '@mui/icons-material/AllInboxOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import PolicyOutlinedIcon from '@mui/icons-material/PolicyOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';

const Sidebar = () => {
  return (
    <div className='sidebar-1-box'>
        <div className='blank-div-1'></div>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKIAAACfCAYAAAB6FgJoAAAABHNCSVQICAgIfAhkiAAAAF96VFh0UmF3IHByb2ZpbGUgdHlwZSBBUFAxAAAImeNKT81LLcpMVigoyk/LzEnlUgADYxMuE0sTS6NEAwMDCwMIMDQwMDYEkkZAtjlUKNEABZiYm6UBoblZspkpiM8FAE+6FWgbLdiMAAAazElEQVR4nO2deXhU1fnHP+fOln1jSQhLEtSK4I7SurZ1XwDFvYAoouCGy09xQUutVay7slUBFakiiiIqdalaa60VqqVaFRQBIzuB7Pss9/7+eAkkJJPMJHPvnZnM53nmgczcueed5Dvn3nPO+34PJEiQIEECQZl0Xs0wSH3iWcNRsg2lHCa1ksAydB2GDcMYtb/yqSJqI33+iAlxzETjBH+A8xsaOFDTGGLojbkBPeDCMMwSewKLUQrD4fDU6zg3OBQb3B7eLyrk4wfuVl93+dxdefPNdxn7b9rMFK9fv0ShMszrYBNELYaOw6H96HIz4+Vn1BzA25nTdEo5y/9h9Hl2Po94vfWjHc5kMDpzlgTxR6DG6XTc99rz6sFw3xm2EMdOMq6pqGyY7XAkJbq/BG2iFGsLCxjzxP3qi5DfE+qBBqgLxxvLfV7O6lx4CboLSkHAX4/TnXzV6wvV/FDeo4VykFGH+/xLjRUJESYIBcMAzZFMwB+YN2aSMSOU93QoRON7nOdNMr4I6AzreogJuhNKOaiuNiaPmWQ80eGxHR1wwXjjPZ+X0yITWoLuiGEEcDgcV73+5+CX6XZ7xPMvM36fEGGCrqKUA7+vft6t04zDgh0TVIiXXWMc2NhYN82c0BJ0NzRnMus3sCjo68FeqK5hodOZYk5UCbofBgR0Y/DFE4xr23q5TSFedaNxks/vHWYkJqoTRBClFI2N3NfWa20KcVcZd2ua29yoEnRLdD2QffFVxnX7Pt9KiHXGiN4+X+2vrQkrQXdDKQfeRq7Z9/lWQrxs/JuXOByp1kSVoFvi8zYMXvm1MbD5c62EaMBF1oWUoDvicCSpRx9rOS3YSog+HwdZF1KC7oquc0bzn1sI0ainAPQca0OKDQxDHgEdfH5o9EJDI9Q3yv8bveD1gT8g2cxNxydoG68PT/Ofnc1/uOF3Rh7o1kYUZRiGiKlJbPVe0DRwOcDtgp450LsHZGdBWgo4nVBbB3oAauqgsgpKSqGiGvx+8O8WZZIbPC5wOcHpkAyV7ozTwRCkI9RhHyFuK8GDQbdLtA7oUFsP1XXg8cDQwTBofygcAAOLIC0NsjIhNcz5/apqEWZ1NfxYDMUbYe0GWLUa6hsgLRlSk0Wc3Q5lZBkr8aifUw/7CFEP0C10aBjS49XUQ1k1/GwATDofhgyGogJITgYtAr+EjHR5AAweJP/qBtTXw8ZNsG49LH8f/r4KclIhIwU8bumB4x1D9zs5jD1ldd3qu6jrUFULdY3w62Fwyq/g8EOhV0/rYtCU9KwHHSiPEWeJML9bCx99An9fAdt2QU6GiDJeMTBUc/V1CyE2emFXFWSlwQ0T4LhfQG5vu6PaS3IyHHGYPK6eAN+uhjfegRfehv1y5fId771k3AuxvApOOBrOGwFHHm53NB2TkgxHD5XHTdfAXz+EF5bK/WZORmRuGaKRuBZiTT2MuwAmjLM7ks7RsweMvghGng2ffAr3z5JhZlZa/PWQcfZxWrKzAkacaXcUXSctFc48DT56DW6+Chq8UB1xrwV7iWshGkBKHKVUulwwagS8+ixcOBzWbZXRfzwQ10JUirgs/s/IkEHN8ucgtyeUVsb+x4xrIcY7hQXwzEz4v6vg+82yIhSrxKQQ/QGZD0wgvf6okfD2czLirq6zO6LOEXNCrK2HrHSYPhXKquyOJnoYWASL5sIpx8PWXXZHEz4xJcSScjhmqFyODjwAymvsjii6cDrhzv+DuybDD1tkJSlWiAkhGgZsKoFrL4V7p0pigj9ORotmcM7Z8PyjUFEDgRi5b4x6IRoGfLcZpt8OYy+xO5rY4agjYeFM2FYeG1M8US1EXYetpfDC43D6yXZHE3sUFsA7L8gl2+uzO5r2iVoh6gZs2glzH4Kjj7Q7mtilV094dgYoR3SLMSqFaBiwZSc8/zgccajd0cQ+PXLghTmyPh2tl+moE2LTwGT2/XDowXZHEz9kZ8H8JyQbPRpH01EnxOId8OBU+MXRdkcSf+Tlwu+nQGkUzr9GlRBLyuCWCXBqwmfCNAoKoK7B7ihaEzVCrK2H006Acb+xO5L45u33oEeG3VG0JiqE6A+A2w133Wp3JPHNq8vgqRelDDbasD1D2zBgexm8/JTk2yUwhyWvwwNzYECu3ZG0je1C3FkB99wM+xXZHUn4+Hzi9gAyNaJp8mVyRtnegy+9Cg8/Hb0iBJuF2OiFIw6C4Wd0fGy08cN6uONemSRWSork3W4pms/KgMwMyMuDA4qgTx8oGGBPeejLr8Ejc6NbhGCjEA0DKmph2m12RdA1/v4JlFZAxm4HP59PRFldA1tKZK7OH9htW9IIZXVw4uFwwXCZpO+bb36Mi5bEhgjBRiGWVcGUSdFVXxwODY3ihbOnmi5ImWdasvzbD9hVCg//CSpr4ZRfwLlnw/HHmBPf4lfhsfnhibC+EZI9HR9nBraMmgMB6NMLzh1uR+v24XRAdjoU5sHqH2DKH+D0i+CTf0W25mTREnjoaejXK7TjmwaM55wuRlJ2YIsQN+2E22+Iv9rccHC7IDcHPE64+R64+U7YtKXr5130Sng9oWHA+m0yYLz2Sjjz1zKnazWWS6HRB6ceA0NjwHXBCjQN+vWG7zfA2eNg2fLOn+vVZfDw3PB6wh+3w5/ugzNOlefG/Uas+Kz2drRciKWVMH6s1a1GPx4XFOXB9FnwwKMyyAmHV5bKPGFBXmjH6zps3glz/wgnHLv3+V49Ydx51veKlgrR64Pjh8LgA61sNXZQCvJ7wgf/hPHXywg8FJa9BdPnQP8QB34BHX4qgYVPtp1ccuEo2FFhba9oqRC3lsKERG/YIempUFYBl18nI+32eP1NuHeGDIBCwR8QT6AlT8GQIG7p2Vlw7WhrkyMsE6I/AIcfGPzDxxoG5vYYSW5xlR09Ccor2j5m2XK4d2boAxOfX+Zu/zwbfrZ/+8cOPxOq6qzrFS0TYnkVjI+jzJq0FMjJkmrCJhP3SP/R3LuXCyfc2Lpn/PNi+MMMKAhRhF6fnG/pM9AvhMn0/n3hpF9Yl9FtyYS2boij1ZFBN0mNPbIyYWCB+NDoASgtgzU/gNcvf3C3MzKG7W4XNDbA+Mkw8VJZOlzyBny5JvR7woZGSEqCZ2fKZTdUzhsBH62AvB6diz0cLBFiQyOMOAXS061ozRoqqqQHdDoguwcMOgDOOg2qquCb1fDpFzLyzUjrurmmyyWj3Meelp43IxV6ZIb23tp6KOwHT0yH1DA3FBt6uBRdGYb5uyBYcmkuq4aTfmlFS9ahAKXtdRzTdZkTHFgkc3GzHhSb5Op62FnedYMkTYPMNBFgqLsQVNfCfgXw5B/DF2FTm1dcYM2gxXQhGgYkJ8XPIGUPSno6TdstSE1+NgxZwsxIh9NPgXdfgul3SkZOSbl1N/8V1XDMkTD7ETFn6iwnHmeNtYvpQqxrgEvPNbsV61Gq5UPTmv28+7ca8AMKfnk8PDsL7rkF1mw2f7J4V4WYMf1+Kji6+Bcu6A+FfWTu0UxMF2JVLQwbGvnzupwyCLKLJvFpau+jqVdU7E7G2X3ZDgRk0HHaSfDfd2DkabBxhzl/3JJyuOBMuHsKOCKQoJuUBMcdDd4wV3rCxVQhGobsKVJUaMLJlb173Sn26RWbRLjPoyk9rCnW1BSYPAmefXTvjleRYnMJjL8Qbmq1LXfXOGaYTIKbialC9Plh6BCZcog3mgtQaXtLBVqIcJ/jm3P4ofDaAjhhGOwo6/qXalsp3DAerrq8a+dpiwP2gzKTjVFNFWKjDw4dbGYLNtLsvnDPpbnZvzQJcvexbZGcBNNuh9uvlSyYzt5qlJTLOcwqxe2RA31yzL0VMlWItfVwyBAzW7APtY/w9vSG2l4B7hFkB+c6dzgseFR6tXD9DBu9cMqxMvlsJiNODj8jKBxMFWJNA+RbUJthB4pm94QarUfOau9xoXDk4fDK09DgC8+EtLoOzrDAsm/IICklMAvThGgYMrLtbeGGi1bSdG/Y/NLc3mAlFIoKJCGh1hv6Gq9S1tjN9c2XjYbMwjQh+gNw3BFmnd1+mnrEfS/JLcRI+FsO5+XC4qflfKGsxqQkwb9XdeIDhEnffAjE4j2izw8Hx3MCbDPBOYKNmPf9N0Rye8G8x2BLacejaY9LEmnNxu2SJAuzLO1ME6LXF1q6UazS5gBln4FK04i5M/kCffLggSlQ2cHymtJkOa+ishONhEFSEgzIN2+FxTQhBvTOLbTHCq2W+FTLwYsc1DkRNlFR2fHqSNP5y8q70FAIaBr07hGDPaIvIDl7ZrFnesQmmq8xt5rMplmP2ElWfgH3zoL0EJy7lIKa6i40FiIZGTHYI/r8JucfKnDZaHak6+J143DIPaLSWveSneVfK+GG38IBfUM73uOC7Ts7316opKfFaI+YFseX5pISeO9vsG6DfOlczr29YtNAhub/D5FPV8D4KZCXE/r7HFroFX9dIS3VvNUV04So67JDlFkoZCRnF0rJSsMXX8KCRSKggC57mjRlZIc7ffPpCrhhGgzqH554NQUNFiSvJifHYI/odHTtHqkjlAapSTZn4Cj5MigF7/0d7vkjfLtmtxg1wvoFfPoZXD1VXBrCvqxblInkcJi3L3TMus84NLmRb+8PoBvWbKitlEws+/1w14PwzEKxqQvVsPPTFXDdb2Fgn87dWzatYpmNpjDtF2repdlkBbjcsnt7e+2YUeLZHpoGfXvB8g/h5qlQsrNjo6lPP4PrfytloZ0d4Oi6NffjAR3TLnOmCtHMHdVdTuif3362itsBtTZsMJ6RKqPYSybBj8XBj1v5OUyaCgN6d22U7fVDDwtKPhsaul6RGAzThOhyQJ3JXntZHcxreVxi3WEHbpeYdF46Gdb/2Pr1FZ/D9XfDfvldnw/1B8KrV+4sdfXmWQmaKkSzpxTy8trvdd0u2GXjbu5NxpwjJ8DGTXuf/2IVXHKTGC5FYlJeKZlsNpuKyq4XYwXDVCFWmTzbv19h+zlyHhdsjoD5ZVdwaDAwFybeAv/7Rry3b5wGhxVGRoTG7gFZboieiF2hpsa8S7NpYy2nQ1wPzCQvt/1Lc4oH3v4bjLnY3Dg6wuEQ0U26Te5te2ZGbnnSH4Chg61x3y2rMK8dU4VYbvJCfN98+cMGs8RwOODrdVBbJ9VzdqJpYlUcaeob4VfHdnxcV2logE3bIlOi2hamfY88bvhqjVln38vwk9qvpUhLgtUWxGEXlbXW1AV5ffDTthgcNTudsPIrs86+l18eK0X8wchIgQ//YX4cdqAbkJUOAwvNb6u8QnpfszKeTBOipmBjiQz5zeSQgwEt+MS1xw1v/U1s4+KNhkY45xRJWjWbH4vl6mIWpt7iZiXDlq1mtiCpSaNODV7Yo5RMbH/wUWTbNQxz19JDobJWfHWsYNNmmYUwC1OFmJIExT+Z2YJw1mlQ3s5UUUYq3Ds7sr2zb7fBkl0EdOjTEw47xJr23v8EkkzMpjJXiB5JkzKbIQfBQQODT24rBXmZ8NKSyLVpe29YA1dYZAXd0AiffGXurqumCtHlgm++M9choIlrr4Dt7Tjwp6XAvMWwodj8WMxGNwAFJ//KmvZ+LIaeJrv9mipEhwZrimHHDjNbEX5+FAw7NHixuVLQIwPuvj98W49oo7wKbplo3dzo56tk9sFMTJ+Pz0iG/31rdivC9VfK5obBcDlh206YM8+aeMwgoEN2Bpx5qnVtrvxCttswE9OFmJYMb75rdivC4EEw/nzxjg5GZhosfB2WvmlNTJHmpx1wzxQp3LKC7Tvg89UyL2wmpgvR6YR//LfjHZQixZWXgdPV/uW3by/Zren9v1kTU6SoqYNLzhLDJqtY9SUku8wfnFlSKpCXBSv+bUVLUuAzczrs6MA4vTAPbrkPXn/Lmri6ij8A2Zlwc4TdYDvixaWyJZvZWCLEtBR4w6LLM8j2XtNuguLt7R83MF92A50zz5rals5iGPDfYnjoHjH3tIrNW+HLteZO2zRhiRCdDvjye1i7zorWhOFnwHVjZY+T9ujbC15ZDldc1zJ5NVowDNnOdukMsa2zknffF6dYK7Csii87Dd7+q1WtCRPHw3lnwM4OygWy0qGkFEaMh5dfkwncjvAHzL9vMgxYvRGm3w4/b2M7WzOpq4dl78qihBVYJsSUJJi3JPhOm2Zxy2Q491TxmW4PlxMKc+FPC+HMi2H5u5LHGAyv11zvnaaecMY0ON0CR9h9+fQzcRmzIuEWLK5rzsuCt96xskVhyo0wcTRs2Nr+AEYp6R3TU+GhOXDyhTD3OfhurWxZ25zNW81LEg0EYPUmmH2/tfOFTRgGzH9R6m2swpJNIZtIS4EFr8A5Z1u/5cXlY8RzcOpDkJfdfkG6piAnQ/4gS5bDM6+IF02/PlIns70EireYM8lbWy9WLe8sgP0HRv78ofDZSvl8fSy0nba0R1S7rTGW29ArglziXp0LmemSrdNR8b1SkJoMfXrIscWb4a8fw7drIy9C3ZDdqI4/GhbPs0+Eug4z50PvbGvbtdxyJCMVnlxgvrFkMIoKYMEcGHe+rFKEalCuadKLJnkia+9hGJJhXl4FT9wDv7vDXhe1j/8JG02sTQmG5UJUCrJSxR/GLtwumDAO3nwOhh4igrTCmb85hiHbim0rgzGj4N3FshOondTXw4OzQt8LOpLYYsKUkgQvvw0/rLej9b0M6A/3/xZenAn7F8L6rXKPZpb1GkhCbVkVrN8Go06H5QvlSxENNs+LX5OUPatGys2xdLDSnNxsePBJePpx6y8D+zJ4EMx4UIrxl78L730Mm7ZDVpp8abr6h/H6ROCVdXDiUDj9JEnxjyYj0x9/klumgjx72rdNiC4nrFkPb/wFzhtpVxQt6dcXrp4Al4+FtT/Igv9Lb8GGTZCdKgMUj0u+OHuM25HlQcPYvWm4Lr1evVfuP2saYeSJcNqvpNArP89e7+9gPDYb8nvYl3lumxABemXDnY/AUUfCgH52RtKSJA8cerA8Lh8LlVVSBLZ5i/QcO3fJZHddvXgiapqsAaekQE62bOtRVCAOXdH0uYKx+FVYtRp6WWDkFAxbhQiwfz784WH406Pm57x1lswMeQwe1Pq1YC4TscKGYrhvjriS2YntjrEuJ6z7CWbHaNZ0LIuwrh7uuFeWNu3+GLYLESRrev4S+ORfdkfSvZj+KJRXWpPm1RFRIUQQ/+gp99k/pdNdWPwafPgvWTmKBqJGiEpBr0yYeKt9qy7dhY//CQ8+ZY47WWeJGiGCTIsku+Hmu8z3zOmufLsGrp8mvt3RRFQJEWT5bVuJuPJ7LSjM706sWw9X3gpFUTiXGXVCBFnNWP8T3Pl7madL0HWKN8LlN0HPDHuW8DoiCkMS0lLE6POG21snpSYIj7Xr4KJJUq5h93JqMKJWiCBi/KEYJt/Wftp+guB89TWMv0nW9qNVhBDlQgSZXti8HS64AjZutjua2OKDj+Ci6yWty6xtKSJFlIcnJLnBAYy+Br76xu5oYoMFL8JtD8Cgfub5XkeSmBAiyDp0TjqMvQEWRdDnMN6orIJb7oL5L3V9azUriRkhgoz29suHmc/BtOnyS0+wl9XfwcVXwTdroaeNmTSdIaaE2ERuDqxcBWeMhs//Y3c09uMPwLznYexk2fEr2aKi+EgSk0IEyf/rlQmT7oA/Pt59e8dv18D46+CFpTAgN/oHJcGI0bAFTckv/8N/wqjLxNLEzh3traSyEh6bBZfdJO4ZVhbDm0FMC7GJ1GSZc7zvSRh3DayyYKMhu2hohNffhFMuhnc+gn69ojehOBzi4CMImpKi8PJKuOYOGHYIXD1edhyIB3x+eO8DmPeC1EDn94idEXEoxI0Qm3A6xJlhw0YYM1l27rz6Mjj8UNnlINaoqJSJ6RnPgaGLN0+OxXYtVhB3QmzC5RRX2B0lslN8YT5cNBJOOA56W+jp0ll+WA/L/iKXX12X0tZYmJjuLHErxCacTukh6+ph1nNw+8Nw5rEw6mzZtalHlCSH+gOwdRt8/gU89SLsKpdbjfSU+LoEByPuhdiEQ5PamMw0uWxPexj8Opx4FAw7Eo44DIoKre11autgwwZY+R9Y8R9YtQYyU0V8dhW628W+QuwG373du8hnyVTPN9/D5/+D6nqoqoeTj4aTT4D+/aCgP2Skg8vdNeMlr1fcHkrLZG/CDcXw5vvwXbFspJORIruoDsiN1CeMfpRyBNjGHnOXFr/e5GQCNTXWB2UXSklGuNslPSXAxi0w5/ndLg0NcnkszIfCfpCVJcLMyZJi+pQUmVjXlFxaGxrFyKiyau+jtFS8BtdtkrzK1GRJ4kj2wIH97f38dqKUw0t/9qQ9txDiyOFULXrZ+qCiCZdTHhmp0BvpNbfvhC3bxU5E10V0AX3vzwYiaoeS9XCnQ24FHBpoDnBqsgqkYmz910wCATYo2FMM0kKIF49Uq88ZrdegSLM+tOhEKRFWNNT+xhOGwbbmP++7suLXHKqdnY8TJIgMyUm0sPVvtcSnabzRPYYsCexCKfC4abGTdyshpqWxzNBjfB/ZBFGNoQeqn39EPdv8uVZCfH62ek9zOHZaF1aC7obL7fiLSqOFn0eb2TcuBzY6XCeIZ5SCzAyWtnq+rYONCrJHXuvdqimXhVsQJugOpKTw5Ytz1VBN0cKpvM0eUWVR7vG4HukOa5wJrMMwAqSncd2+IoQOlvRGXWp8p+scaF5oCboTLhdzX12gJrX1WrsZ2j17cL5hJEbQCbqOQ6NmyQJ1Y7DX2xXivCfUtwP6OUbresKWK0HnUcqofm2+GqogqItRhzUrsx5SL6WnuacHAgnDwgThowcaAkUF6hLlYW17x4VUPLVonrorOyv5dwkxJgiHgE75kEFJtz1+v3q7o2PDGhePmWicVVPjW4pyxWAJdwKrMAwDl1OVXjCKyb8ZpV4K5T2dmaDxnDfOWBDw65eg4qIaNUGEMAxQBEhOcTyweL6aGs57Oz1TeOOdxhGbtjA9ENDPiJPy6ARdwDC8ZGW6333+XjVR9WJTuO/v8pT1tbcaB20v4XzD4HpdN3Lla5EQZtxj6KAUHo/aqBQP9O7NspkPqO2dPV1E105qjYaDxo7z9NHgEI+HIgMyDbE2TBAHaNCoG5Q2NrI2KYW1C59Wm1yKn+yOK0GCBAkSJEgQcf4f4ML74OnXdKsAAAAASUVORK5CYII=" alt="logo" className='logo-img' />
        <div className='home-icon'>
            <GrHomeRounded fontSize='medium' />
        </div>
        <div className='dollar'>
            <MonetizationOnOutlinedIcon fontSize='small' />
        </div>
        <div className='blank-div-2'></div>
        <div className='progress'>
             <TimelineIcon fontSize='small' />
        </div>
        <div className='graphics'>
             <TbTriangleSquareCircle />
        </div>
        <div className='inventory-container'>
            <Inventory2OutlinedIcon fontSize='small' />
        </div>
        <div className='express'>
            <AllInboxOutlinedIcon fontSize='small' />
        </div>
        <div className='wallet'>
            <AccountBalanceWalletOutlinedIcon  fontSize='small'/>
        </div>
        <div className='setting'>
            <div className='setting-icon'>
                <SettingsOutlinedIcon fontSize='small' />
            </div>
        </div>
        <div className='profile'>
            <GroupOutlinedIcon fontSize='small' />
        </div>
        <div className='security'>
            <PolicyOutlinedIcon fontSize='small' />
        </div>
        <div className='blank-div-3'>
        </div>
        <div className='ask'>
            <ContactSupportOutlinedIcon fontSize='small' />
        </div>
        <div className='logout'>
            <LogoutOutlinedIcon fontSize='small' />
        </div>
    </div>
  )
}

export default Sidebar;