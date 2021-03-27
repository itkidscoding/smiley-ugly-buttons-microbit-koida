/**
 * 스마일 아니면 찡그림 표정 과 소리 내기
 * 
 * 버튼 A를 누르면 스마일 표정을 지으며 아름다운 소리를 내고
 * 
 * 버튼 B를 누르면 찡그린 표정을 지으며 울음소리를 내는 이모티콘 표정을 출력하는 게임이다
 */
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
    music.playMelody("G B A G C5 B A B ", 120)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showIcon(IconNames.Angry)
    music.playMelody("G C C C C C C G ", 120)
})
