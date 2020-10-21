<?php

namespace App\Http\Controllers\Admin;

use App\Formula;
use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use Illuminate\Http\Request;

class FormulaController extends Controller
{
    private $rules = [
        'name' => 'required|string',
        'price_xaf' => 'required|numeric',
        'price_limo' => 'required|numeric',
        'channel_tv' => 'required|integer',
        'channel_radio' => 'required|integer',
        'status' => 'required|integer',
        'photo' => 'nullable|image',
    ];

    private function data()
    {
        $formulae = [];
        foreach (Formula::all() as $formula) {
            $formulae[] = array_merge($formula->toArray(), []);
        }

        return $formulae;
    }



    public function index()
    {
        $formulae = $this->data();

        return response()->json([
            'formulae' => $formulae,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate($this->rules);

        if ($file = $request->file('photo')) {
            $name = time() . $file->getClientOriginalName();
            $file->move('formulae', $name);
            $photo = htmlspecialchars($name);
        }

        Formula::create(array_merge($request->except(['photo']), [
            'photo' => $photo,
        ]));

        return response()->json([
            'message' => UtilController::message('La formule a été créée avec succès.', 'success'),
        ]);
    }

    public function update(Request $request, $id)
    {
        $formula = Formula::find($id);
        if (!$formula) return response()->json([
            'message' => UtilController::message('La formule n\'existe pas.', 'danger'),
        ]);

        $request->validate($this->rules);

        $input = $request->all();

        if ($file = $request->file('photo')) {
            unlink(public_path() . $formula->photo);

            $name = time() . $file->getClientOriginalName();
            $file->move('formulae', $name);
            $input['photo'] = htmlspecialchars($name);
        }

        $formula->update($input);

        return response()->json([
            'message' => [
                'type' => 'success',
                'content' => 'La formule a été modifiée avec succès.'
            ],
        ]);
    }

    public function destroy($id)
    {
        $formula = Formula::find($id);
        if (!$formula) return response()->json([
            'message' => UtilController::message('La formule n\'existe pas.', 'danger'),
        ]);

        $formula->delete();

        return response()->json([
            'message' => UtilController::message('La formule a été supprimée avec succès.', 'success'),
        ]);
    }
}
