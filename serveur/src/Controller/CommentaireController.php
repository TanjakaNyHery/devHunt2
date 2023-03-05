<?php

namespace App\Controller;

use App\Repository\CommentaireRepository;
use App\Repository\QuestionRepository;
use App\Repository\ReponseCommentaireRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class CommentaireController extends AbstractController
{
    #[Route('api/question/{idQuestion}/commentaire', name: 'app_rep_comment_in_question', methods: ['GET'])]
    public function listCommentInQuest(int $idQuestion, QuestionRepository $questionRepository, CommentaireRepository $commentaireRepository): JsonResponse
    {
        // recupérer question
        $question = $questionRepository->find($idQuestion);
        $data = array();

        // Si question non vide
        if($question) {
            $listCommentaire = $commentaireRepository->findBy(['question' => $question]);

            foreach($listCommentaire as $comment) {
                array_push($data, array(
                    'id' => $comment->getId(),
                    'commentaire' => $comment->getComment()
                ));
            }
        }

        return $this->json($data);
    }

    #[Route('api/commentaire/{idComment}/reponse', name: 'app_rep_response_in_comment', methods: ['GET'])]
    public function listRespInComment(int $idComment, ReponseCommentaireRepository $reponseCommentaireRepository, CommentaireRepository $commentaireRepository): JsonResponse
    {
        // recupérer comment
        $comment = $commentaireRepository->find($idComment);
        $dataRes = array();

        // Si comment non vide
        if($comment) {
            $listReponseCommentaire = $reponseCommentaireRepository->findBy(['commentaire' => $comment]);

            foreach($listReponseCommentaire as $reponsecomment) {
                array_push($dataRes, array(
                    'id' => $reponsecomment->getId(),
                    'response' => $reponsecomment->getReponse()
                ));
            }
        }

        return $this->json($dataRes);
    }
}
